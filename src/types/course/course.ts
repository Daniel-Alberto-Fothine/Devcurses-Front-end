export default interface Course{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    isFree: boolean;
    price: number;
    currency: string;
    publishedAt: string;
    level: string;
    durationHours: number;
    isFeatured: boolean;
    category: string;
    instructor: string;
}