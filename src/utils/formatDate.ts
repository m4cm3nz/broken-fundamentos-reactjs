const formatDate = (date: Date): string => {
  console.log(date);
  return new Intl.DateTimeFormat('pt-BR').format(new Date(date));
};
export default formatDate;
