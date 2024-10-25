export interface course{
    id: number,
    name : string,
    sessionName : string
}


export interface teacherCourse{
    id:number,
    teacherId: number,
    courseId: number
}

export interface studentWithCourse{
    id : number,
    courseId:number,
    studentId : number
}

