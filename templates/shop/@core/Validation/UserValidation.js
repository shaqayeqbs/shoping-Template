import * as Yup from "yup";
import { isValidPhone } from "../../components/Hepler/phoneRegex";
import { validPass } from "../../components/Hepler/checkLangPassoword";
import {
  notValidPhone,
  wrongPassowrd,
  persianKeyboard,
  emptyInput,
  shortPassowrd,
} from "../constants/toasts-messages";

const userSchema = Yup.object({
  phone: Yup.string().matches(isValidPhone, notValidPhone),
  password: Yup.string()
    .matches(validPass, persianKeyboard)
    .min(6, shortPassowrd),
});

export default userSchema;
