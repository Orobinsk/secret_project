export const createFilmPageStyles = () => ({
  labelButton: (isActive: boolean) => ({
    border: '1px solid #11171B',
    fontSize: '15px',
    color: isActive ? 'white' : '#00e054',
    borderRadius: 0,
    '&:hover': { borderBottom: '1px solid #9ab' },
  }),
});
