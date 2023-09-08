export interface Job {
    id: number;
    company: string;
    contract: string;
    featured: boolean;
    level: string;
    location: string;
    logo: string;
    new: boolean;
    position: string;
    postedAt: string;
    role: string;
    languages: string[];
    tools: string[];
}
