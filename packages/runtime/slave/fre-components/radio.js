export function Radio(props) {
    props.type = "checkbox"

    const Radio = fre.styled("input")`
            outline: none;
            width: 20px;
            height: 20px;
            background-color: var(--defalut-border-color);
            border: 2px solid var(--default-border-color);
            box-shadow: inset 0 0 0 4px var(--default-color);
            border-radius: 50%;
            display: inline-block;
            -webkit-appearance: none;
            -moz-appearance: none;
            transition: all 0.2s ease;
            position: relative;
            &:checked {
              border: 2px solid var(--primary-color);
              background-color: var(--primary-color);
            }
          `
    return fre.h(Radio, props)
}