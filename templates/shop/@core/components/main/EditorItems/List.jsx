import { digitsEnToFa } from "@persian-tools/persian-tools";

const EditorList = ({ data }) => {
  return (
    <ol>
      {data?.value.split("$@|%").map((value, index) => (
        <li key={index}>
          {digitsEnToFa(index + 1)}. {digitsEnToFa(value)}
        </li>
      ))}
    </ol>
  );
};

export default EditorList;
