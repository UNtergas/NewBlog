import { DUMMY_NEWS } from './news';
import type { NewsItem } from '@/types';


function getAllNews(): NewsItem[] {
    return DUMMY_NEWS;
}

function getLatestNews(): NewsItem[] {
    return DUMMY_NEWS.slice(0, 3);
}

function getAvailableNewsYears(): number[] {
    return DUMMY_NEWS.reduce((years: number[], news: NewsItem) => {
        const year = new Date(news.date).getFullYear();
        if (!years.includes(year)) {
            years.push(year);
        }
        return years;
    }, []).sort((a, b) => b - a);
}

function getAvailableNewsMonths(year: string | number): number[] {
    return DUMMY_NEWS.reduce((months: number[], news: NewsItem) => {
        const newsYear = new Date(news.date).getFullYear();
        if (newsYear === +year) {
            const month = new Date(news.date).getMonth();
            if (!months.includes(month)) {
                months.push(month + 1);
            }
        }
        return months;
    }, []).sort((a, b) => b - a);
}

function getNewsForYear(year: string | number): NewsItem[] {
    return DUMMY_NEWS.filter(
        (news: NewsItem) => new Date(news.date).getFullYear() === +year
    );
}

function getNewsForYearAndMonth(year: string | number, month: string | number): NewsItem[] {
    return DUMMY_NEWS.filter((news: NewsItem) => {
        const newsYear = new Date(news.date).getFullYear();
        const newsMonth = new Date(news.date).getMonth() + 1;
        return newsYear === +year && newsMonth === +month;
    });
}
const newsRepository = {
    getAllNews,
    getLatestNews,
    getAvailableNewsYears,
    getAvailableNewsMonths,
    getNewsForYear,
    getNewsForYearAndMonth,
}

export default newsRepository;