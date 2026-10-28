function twoSum(nums: number[], target: number): number[] {
  const numbers = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const numTarget = nums[i] - target;

    if (numbers.has(numTarget)) {
      return [numbers.get(numTarget)!, i];
    }

    numbers.set(nums[i], i);
  }

  return [];
}
