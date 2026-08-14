function strStr(haystack: string, needle: string): number {
    if (needle.length > haystack.length) return -1;

    let first = 0;
    let second = needle.length - 1;

    while (first < haystack.length && second < haystack.length) {
        const subStr = haystack.slice(first, second + 1)
        console.log("subStr",first, second)
        if (subStr === needle) return first;
        else {
            first++
            second = first + needle.length - 1
        }
    }

    return -1
};