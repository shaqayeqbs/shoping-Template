import { Languages } from "react-tiny-i18n";
import APP_CONFIG from "../../constants/app-config";
import en from "./en";
import fa from "./fa";


const languages = {
  en,
  fa
};


const LanguageProvider= ({ children }) => {
  return (
    <Languages languages={languages} defaultLanguage={APP_CONFIG.defaultLang}>
      {children}
    </Languages>
  );
};
export default LanguageProvider;
