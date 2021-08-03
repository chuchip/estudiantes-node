export interface PersonDto {
    user: string,
    password: string,
    name: string,
    surname:string,
    company_email:string,
    personal_email:string,
    city: string,
    active: boolean ,
    imagen_url: string,
    termination_date: Date,
    // timestamps!
   createdAt: Date,
   updatedAt: Date
}