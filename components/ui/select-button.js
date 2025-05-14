// can apply different CSS classes depending if button has been selected or not
function SelectButton({ buttonText, onSelect, children, ...props }) {
  return (
    <button onClick={() => onSelect(buttonText)} {...props}>
      {children}
    </button>
  );
}

export default SelectButton;
