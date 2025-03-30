<script setup lang="ts">
import { useForm } from "vee-validate";
import CoreInput from "../components/form/CoreInput.vue";
import { toTypedSchema } from "@vee-validate/zod";
import { z } from "zod";
import CoreButton from "../components/form/CoreButton.vue";
import { login } from "../services/api/auth/login";
import { useRouter } from "vue-router";
import { useAuthContext } from "../context/Auth/AuthContext";

const { login: loginProvider } = useAuthContext();
const router = useRouter();

const schema = z.object({
  username: z
    .string()
    .min(1, "Campo obrigatório")
    .refine((val) => val.trim().length > 0, {
      message: "Campo obrigatório",
    }),
  password: z
    .string()
    .min(1, "Campo obrigatório")
    .refine((val) => val.trim().length > 0, {
      message: "Campo obrigatório",
    }),
});

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(schema),
  initialValues: {
    password: "",
    username: "",
  },
});

const [username, usernameAttrs] = defineField("username");
const [password, passwordAttrs] = defineField("password");

const submitForm = handleSubmit(async (values: z.infer<typeof schema>) => {
  await login(values).then(({ accessToken }) => {
    loginProvider(accessToken);
    router.push("/link");
  });
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-br from-[#6E63F2] to-[#D84CB5] gap-3 px-5"
  >
    <div class="flex flex-col gap-3 items-center">
      <div
        class="rounded-full bg-white/10 backdrop-blur-sm w-20 h-20 flex justify-center items-center"
      >
        <font-awesome-icon
          :icon="['fas', 'link']"
          class="text-4xl text-white"
        />
      </div>
      <h1 class="text-4xl text-white">LinkHub</h1>
      <p class="text-[#E4D5FC]">Conecte-se ao seu universo de links</p>
    </div>
    <div
      class="flex flex-col gap-1.5 p-10 rounded-md max-w-[560px] w-full bg-white/20 backdrop-blur-sm"
    >
      <div></div>
      <form class="flex flex-col gap-4" @submit.prevent="submitForm">
        <div>
          <CoreInput
            type="text"
            :error="errors.username"
            title="Nome de usuário"
            input-id="emailInput"
            v-model="username"
            v-bind="usernameAttrs"
            class="text-white"
            placeholder="insira seu nome de usuário"
          />
        </div>
        <div>
          <CoreInput
            type="password"
            :error="errors.password"
            title="Senha"
            input-id="passwordInput"
            v-model="password"
            v-bind="passwordAttrs"
            class="text-white"
            placeholder="Insira sua senha"
          />
        </div>
        <CoreButton text="Entrar" />
      </form>
    </div>
  </div>
</template>
