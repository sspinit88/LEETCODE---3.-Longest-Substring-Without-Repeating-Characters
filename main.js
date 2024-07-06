/*
3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest
substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/*
Ваша задача - найти длину самой длинной подстроки без повторяющихся символов в строке s.

Вот шаги, которые мы будем следовать:

1. Создайте словарь для отслеживания последнего индекса каждого символа.
2. Используйте два указателя для создания окна без повторяющихся символов.
3. Перемещайте правый указатель вправо и обновляйте словарь.
4. Если символ уже присутствует в словаре, переместите левый указатель вправо.
5. Обновите максимальную длину подстроки.

Your task is to find the length of the longest substring without repeating characters in string s.

Here are the steps we will follow:

1. Create a dictionary to track the last index of each character.
2. Use two pointers to create a window of non-repeating characters.
3. Move the right pointer to the right and update the dictionary.
4. If the character is already present in the dictionary, move the left pointer to the right.
5. Update the maximum length of the substring.

*/

function lengthOfLongestSubstring(s) {
  // Создаем словарь для отслеживания последнего индекса каждого символа
  // Create a dictionary to track the last index of each character
  let map = {};
  let left = 0;

  // Инициализируем максимальную длину подстроки
  // Initialize the maximum length of the substring
  let maxLength = 0;

  // Перемещаем правый указатель вправо и обновляем словарь
  // Move the right pointer to the right and update the dictionary
  for (let right = 0; right < s.length; right++) {
    // Если символ уже присутствует в словаре
    // If the character is already present in the dictionary
    if (map[s[right]] !== undefined) {
      // Перемещаем левый указатель вправо
      // Move the left pointer to the right
      left = Math.max(left, map[s[right]] + 1);
    }

    // Обновляем максимальную длину подстроки
    // Update the maximum length of the substring
    maxLength = Math.max(maxLength, right - left + 1);

    // Обновляем последний индекс символа
    // Update the last index of the character
    map[s[right]] = right;
  }

  // Возвращаем максимальную длину подстроки
  // Return the maximum length of the substring
  return maxLength;
}
