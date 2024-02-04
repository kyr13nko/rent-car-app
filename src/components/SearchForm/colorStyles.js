export const colorStyles = width => {
  return {
    control: provided => {
      return {
        ...provided,
        backgroundColor: '#f7f7fb',
        border: '1px solid transparent',
        borderRadius: '14px',
        color: '#121417',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '20px',
        padding: '5px 0',
        width,
        cursor: 'pointer',
        marginTop: '8px',
      };
    },
    option: (provided, { isDisabled, isSelected }) => {
      return {
        ...provided,
        backgroundColor: isSelected ? 'rgba(18, 20, 23, 0.2)' : '#ffffff',
        color: isDisabled ? '#ffffff' : isSelected ? '#121417' : 'rgba(18, 20, 23, 0.2)',
        fontSize: isDisabled ? '16px' : '18px',
        borderRadius: '14px',
        transition: 'color 0.3s ease',
        '&:hover': {
          color: 'rgba(18, 20, 23, 0.2)',
        },
      };
    },
    singleValue: provided => {
      return {
        ...provided,
        color: '#121417',
        fontSize: '18px',
      };
    },
    placeholder: provided => ({
      ...provided,
      color: '#121417',
      fontSize: '18px',
    }),
    menu: provided => ({
      ...provided,
      borderRadius: '14px',
      border: '1px solid rgba(0, 0, 0, 0.2)',
      background: '#ffffff',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
      overflow: 'hidden',
      padding: '14px 8px 14px 18px',
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: '#000000',
      cursor: 'pointer',
      transform: state.isFocused ? 'rotate(180deg)' : null,
    }),
    indicatorSeparator: provided => ({
      ...provided,
      backgroundColor: 'transparent',
    }),
    menuList: provided => ({
      ...provided,
      '::-webkit-scrollbar': {
        width: '8px',
        height: '130px',
      },
      '::-webkit-scrollbar-thumb': {
        background: '#0b44cd',
        borderRadius: '10px',
      },
    }),
  };
};
