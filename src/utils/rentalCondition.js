export const conditions = rentalConditions => {
  const condition = rentalConditions.split('\n')[0];
  const conditionText = condition.split(' ').slice(0, 2).join(' ');
  const conditionAge = condition.split(' ')[2];

  const condition2 = rentalConditions.split('\n')[1];
  const condition3 = rentalConditions.split('\n')[2];

  return { conditionText, conditionAge, condition2, condition3 };
};
