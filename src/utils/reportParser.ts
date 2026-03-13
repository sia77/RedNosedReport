
export const parseReports = (text:string) => {

    return text
        .trim()
        .split(/\n?\r/)
        .map(line => line
                        .split(/\s+/)
                        .map(Number)
            );
}