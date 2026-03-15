
export const parseReports = (text:string) => {

    return text
        .trim()
        .split(/\r?\n/)
        .map(line => line
                        .trim()
                        .split(/\s+/)
                        .map(Number)
            );
}