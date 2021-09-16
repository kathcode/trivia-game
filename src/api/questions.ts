export const getQuestions = async (category: number = 9, difficulty: string = '') => {
  const request = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`);
  const data = request.json();

  return data;
}