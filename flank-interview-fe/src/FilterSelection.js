import './filterSelection.scss';


function FilterSelection({options, selected, setSelected}) {
    const handleOptionClick = (value) => {
        if (value === null || (selected.length === 1 && selected[0] === value)) {
            setSelected([null]);
            return;
        }

        if ((selected.length === 1 && selected[0] === null) || selected.length > 1) {
            setSelected([value]);
            return;
        }

        if (selected.length === 1 && selected[0] !== value) {
            const startIndex = options.findIndex(opt => opt.value === selected[0]);
            const endIndex = options.findIndex(opt => opt.value === value);
            const rangeSelected = options.slice(Math.min(startIndex, endIndex), Math.max(startIndex, endIndex) + 1).map(opt => opt.value);
            setSelected(rangeSelected);
            return;
        }          
    }

    return (
        <div className='options'>
            {options.map((option) => (
                <button
                    type='button'
                    key={option.value}
                    onClick={() => handleOptionClick(option.value)}
                    className={selected.includes(option.value) ? 'selected' : ''}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
}

export default FilterSelection;
