export const createFilmPageStyles = () => ({
  labelButton: (isActive: boolean) => ({
    border: '0.1rem solid #11171B',
    fontSize: '1.5rem',
    color: isActive ? 'white' : '#00e054',
    borderRadius: 0,
    '&:hover': { borderBottom: '1px solid #9ab' },
  }),
});
