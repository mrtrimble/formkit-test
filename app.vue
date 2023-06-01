<script setup>
import { reset } from '@formkit/core'

useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://cdn.jsdelivr.net/'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@ritterim/platform-ui/dist/platform-ui.min.css',
    }
  ]
})

const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY"
]

const submit = async (fields) => console.log(JSON.stringify(fields))
</script>

<template>
  <div class="block-container max-container mx-auto px-4 background--white my-4"
       style="--max-container: 75ch">
    <div class="block">
      <h1 class="text--navy text--bold">Contact Form</h1>
      <FormKit type="form"
               #default="{ value }"
               @submit="submit"
               id="contact-form"
               :actions="false"
               :classes="{
                 form: 'form pb-4',
                 messages: 'list message message--error mt-4',
               }">
        <div class="block-container blocks px-2">
          <FormKit type="text"
                   name="first-name"
                   id="first-name"
                   label="First Name"
                   placeholder="“Jon”"
                   validation="required"
                   :classes="{
                     outer: 'form__field block laptop-up-6',
                     messages: 'list message message--error',
                     label: 'text--navy text--bold'
                   }" />
          <FormKit type="text"
                   name="last-name"
                   id="last-name"
                   label="Last Name"
                   placeholder="“Doe”"
                   validation="required"
                   :classes="{
                     outer: 'form__field block laptop-up-6',
                     messages: 'list message message--error',
                     label: 'text--navy text--bold'
                   }" />
        </div>
        <div class="block-container blocks mt-4 px-2">
          <FormKit type="email"
                   name="email"
                   label="Email"
                   placeholder="“jon@doe.com”"
                   validation="email|required"
                   :classes="{
                     outer: 'form__field block laptop-up-6',
                     messages: 'list message message--error',
                     label: 'text--navy text--bold'
                   }" />
          <FormKit type="tel"
                   name="phone-number"
                   label="Phone Number"
                   placeholder="“XXX-XXX-XXXX”"
                   inputmode="numeric"
                   :validation="[['required'], ['matches', /^\d{3}-\d{3}-\d{4}$/]]"
                   :validation-messages="{
                     matches: 'Phone number must be formatted: xxx-xxx-xxxx',
                   }"
                   :classes="{
                     outer: 'form__field block laptop-up-6',
                     messages: 'list message message--error',
                     label: 'text--navy text--bold'
                   }" />
        </div>
        <FormKit type="group"
                 name="address">
          <div class="block-container mt-4">
            <FormKit type="text"
                     name="street"
                     label="Street Address"
                     placeholder="“123 ABC Street”"
                     validation="required"
                     :classes="{
                       outer: 'form__field block',
                       messages: 'list message message--error',
                       label: 'text--navy text--bold'
                     }" />
          </div>
          <div class="block-container blocks mt-4 px-2">
            <FormKit type="text"
                     name="city"
                     label="City"
                     placeholder="“New York City”"
                     validation="required"
                     :classes="{
                       outer: 'form__field block laptop-up-6',
                       messages: 'list message message--error',
                       label: 'text--navy text--bold'
                     }" />
            <FormKit type="select"
                     name="state"
                     label="State"
                     placeholder="Select"
                     validation="required"
                     :options="states"
                     :classes="{
                       outer: 'form__field block laptop-up-3',
                       messages: 'list message message--error',
                       inner: 'form__select-wrapper',
                       label: 'text--navy text--bold'
                     }" />
            <FormKit type="text"
                     name="zipCode"
                     label="Zip Code"
                     inputmode="numeric"
                     validation="number|required"
                     placeholder="“12345”"
                     :classes="{
                       outer: 'form__field block laptop-up-3',
                       messages: 'list message message--error',
                       label: 'text--navy text--bold'
                     }" />
          </div>
        </FormKit>

        <div class="block-container blocks mt-4 px-2">
          <div class="block flex flex--justify-center">
            <FormKit type="button"
                     label="Cancel"
                     @click="reset('contact-form')"
                     :classes="{
                       input: 'button mr-2'
                     }" />
            <FormKit type="submit"
                     label="Register"
                     :classes="{
                       input: 'button button--salmon text--white'
                     }" />

          </div>
        </div>

        <!-- Displays form data -->
        <pre class="my-5">{{ value }}</pre>
      </FormKit>
    </div>
  </div>
</template>

<style>
body {
  background: var(--lighter);
}

.message:before {
  display: none !important;
}

.message--error:before {
  display: none !important;
}

ul.message li{
  margin: 0 !important;
}
</style>