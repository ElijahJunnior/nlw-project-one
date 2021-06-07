export function convertDurationToTimeString(duration: number): string {

    // Pega a Hora dividindo a duração por 60 (minutos) e por 60 novamente (Horas)
    // Usa o Math.floor para arredondar para um inteiro igual ou o menor mais proximo
    const hours = Math.floor(duration / (60 * 60));
    const minutes = Math.floor((duration % (60 * 60) / 60));
    const seconds = duration % 60;

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':');

    return timeString;

}