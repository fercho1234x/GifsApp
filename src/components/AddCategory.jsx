import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    
    const onSubmit = (event) => {
        event.preventDefault();

        const category = inputValue.trim();

        if (category.length <= 1) return;

        onNewCategory( category )
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
