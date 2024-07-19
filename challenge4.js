function stringFrequency(strings) {
    return strings.reduce((freqMap, str) => {
        freqMap[str] = (freqMap[str] || 0) + 1;
        return freqMap;
    }, {});
}