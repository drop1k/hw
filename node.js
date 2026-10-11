function getgrade(score) {
    if (score < - score > 100 || typeof score !== 'number') {
        return "ошибка: баллы должен быть числом от 0 до 100" ;
    }

if (score >= 90) {
    return '5'
} else if (score >= 80) {
    return '4'
} else if (score >= 70){
    return '3'
} else if (score >= 60) {
    return '2'
} else {
    return '2'
}
}
//не работает код вроде 