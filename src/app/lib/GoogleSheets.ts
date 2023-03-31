import {google} from "googleapis";

export type SheetData = (string | number)[][];

export default class GoogleSheets {
    private readonly sheetHandler

    constructor() {
        let auth = new google.auth.GoogleAuth(
            {
                credentials:
                    {
                        client_email: process.env.GOOGLE_SERVICE_EMAIL,
                        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
                    },
                scopes: [
                    'https://www.googleapis.com/auth/drive',
                    'https://www.googleapis.com/auth/drive.file',
                    'https://www.googleapis.com/auth/spreadsheets',
                ]
            })
        this.sheetHandler = google.sheets({
            auth,
            version: 'v4'
        })
    }

    async append(data: SheetData) {
        return await this.sheetHandler.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A:Z',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: data
            }
        }).then(res => {
            return res.status === 200
        }).catch(_ => {
            return false
        })
    }
}