const calculateDistancePoints = (distance, hillSize, kPoint) => {
    let hillSizePoint = 0;
    let multiplier = 0;
    switch (hillSize) {
        case 'normal':
            hillSizePoint = 60;
            multiplier = 2;
            break;
        case 'big':
            hillSizePoint = 60;
            multiplier = 1.8;
            break;
        case 'mammoth':
            hillSizePoint = 120;
            multiplier = 1.2;
    }
    const diff = distance - kPoint;
    const points = diff * multiplier;
    return hillSizePoint + points.toFixed(1);
};

module.exports = calculateDistancePoints;