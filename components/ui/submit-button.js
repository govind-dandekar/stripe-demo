import { submitButtonCSS } from "@/components/ui/util/button-css";

function SubmitButton({ children, ...props }) {
  return (
    <button className={submitButtonCSS} {...props}>
      {children}
    </button>
  );
}

export default SubmitButton;
