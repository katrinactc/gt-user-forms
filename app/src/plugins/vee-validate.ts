import { configure, defineRule } from "vee-validate";
import { email, required } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import en from "@vee-validate/i18n/dist/locale/en.json";

configure({
  generateMessage: localize({ en }),
  validateOnInput: true,
});

defineRule("email", email);
defineRule("required", required);

defineRule("minAge", (value: Date, [age]: number[]) => {
  const today = new Date();
  const dob = value;
  if (dob.getFullYear() < today.getFullYear() - age) return true
  if (dob.getFullYear() == today.getFullYear() - age) {
    if (dob.getMonth() < today.getMonth()) return true
    if (dob.getMonth() == today.getMonth() && dob.getDate() <= today.getDate()) return true
  }
  return "Age cannot be less than 18 years";
});


