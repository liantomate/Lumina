import "../../styles/Component_TextButton.css"

export default function TextButton({ text, callback, disabled = false }) {
  return (
    <button className="component-text_button" onClick={callback} disabled={disabled}>
      {text}
    </button>
  );
}