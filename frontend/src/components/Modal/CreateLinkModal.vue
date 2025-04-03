<template>
  <CoreButton text="Criar link" @click="showModal = true" />
  <CoreModal
    :is-open="showModal"
    title="Criar link"
    @close="showModal = false"
    @confirm="handleConfirm"
  >
    <form class="flex flex-col gap-4" @submit="submitForm">
      <CoreInput
        :error="errors.title"
        title="Titulo:"
        v-bind="titleAttr"
        v-model="title"
        input-id="title"
      />
      <CoreInput
        :error="errors.url"
        title="URL:"
        v-bind="urlAttr"
        v-model="url"
        input-id="url"
      />
      <CoreInput
        :error="errors.category"
        title="Categoria:"
        v-bind="categoryAttr"
        v-model="category"
        input-id="category"
      />
      <div class="mt-4 flex justify-end gap-2">
        <CoreButton
          @click="showModal = false"
          class="bg-transparent text-red-500"
          text="Cancelar"
        />
        <CoreButton
          @click="$emit('confirm')"
          class="bg-[#9860DC] hover:bg-[#8460af] text-white rounded-md"
          text="Confirmar"
        />
      </div>
    </form>
  </CoreModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CoreModal from "./CoreModal.vue";
import CoreButton from "../Form/CoreButton.vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { LinkSchema, type TLink } from "../../schemas/link";
import { useMutation } from "@tanstack/vue-query";
import { createLink } from "../../services/api/link/createLink";
import CoreInput from "../Form/CoreInput.vue";

const showModal = ref(false);

const handleConfirm = () => {
  alert("Confirmado!");
  showModal.value = false;
};

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(LinkSchema),
  initialValues: {
    category: "",
    url: "",
    title: "",
  },
});

const [title, titleAttr] = defineField("title");
const [url, urlAttr] = defineField("url");
const [category, categoryAttr] = defineField("category");

const mutation = useMutation({
  mutationFn: createLink,
  onSuccess: (data) => {
    console.log(data);
  },
  onError: (err) => {
    console.log(err);
  },
});

const submitForm = handleSubmit(async (values: TLink) => {
  mutation.mutateAsync(values);
});
</script>
