import "../../styles/Component_TextButton.css";

export default function TextButton({ text, callback, toggled=false }) {
    return (
        <button className={`component-text_button ${toggled ? 'component-text_button-toggled' : ''}`} onClick={callback}>
            {text}
        </button>
    );
}