export interface Cv{
    name: string;
    lastname: string,
    email: string,
    birthday: string,
    en: AboutMe,
    sv: AboutMe,
    skills: Skill[];
    
}

export interface AboutMe {
    
    
        role: string;
        aboutMe: string;
        experince: ExperienceEntry[];
    
}
export interface Skill {
    name:string;
    level: number;
}
export interface ExperienceEntry{
    title: string;
    period: Period;
    role: string;
    location: string;
    description: string;
    tech: Tech; 
}
export interface Period{
    
        from: string,
        to?: string
    
}

export interface Tech{
    server: string[];
    client: string[];
    devops: string[];
    environment: string[];
}