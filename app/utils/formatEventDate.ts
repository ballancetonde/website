export function formatEventDate(
    startDateStr: string | Date,
    endDateStr?: string | Date | null
): string {
    const start = new Date(startDateStr)
    if (isNaN(start.getTime())) return ''

    const end = endDateStr ? new Date(endDateStr) : null
    const hasEnd = end && !isNaN(end.getTime())

    // Helper pour afficher "10h" au lieu de "10:00" et "10h30" si minutes
    const formatTime = (d: Date) => {
        const hours = d.getHours()
        const minutes = d.getMinutes()
        return minutes === 0 ? `${hours}h` : `${hours}h${minutes.toString().padStart(2, '0')}`
    }

    const dateOptions: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    const startTime = formatTime(start)

    // --- CAS 1 : Pas de date de fin ---
    if (!hasEnd || !end) {
        return `${start.toLocaleDateString('fr-FR', dateOptions)} à ${startTime}`
    }

    const endTime = formatTime(end)
    const isSameDay = start.toDateString() === end.toDateString()

    // --- CAS 2 : Même jour ---
    if (isSameDay) {
        return `${start.toLocaleDateString('fr-FR', dateOptions)} de ${startTime} à ${endTime}`
    }

    // --- CAS 3 : Plusieurs jours ---
    const rangeDateFormatter = new Intl.DateTimeFormat('fr-FR', dateOptions)
    const dateRangeStr = rangeDateFormatter.formatRange(start, end)

    // Calcul du nombre de jours de différence
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    // Remplace le tiret "–" natif par " et " ou " au "
    const separator = diffDays <= 2 ? ' et ' : ' au '
    const formattedDates = dateRangeStr.replace(/\s*[\u2013\u2014-]\s*/, separator)

    return `${formattedDates} de ${startTime} à ${endTime}`
}