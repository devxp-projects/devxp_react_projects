import announcementIcon from '../assets/icons/messagebox.svg';
import nextIcon from '../assets/icons/nextIcon.svg';
import previousIcon from '../assets/icons/previousIcon.svg';
import hamburger from '../assets/icons/hamburger.svg'
import { DummyDataProps } from '../types/app.types';
import promotionbg from '../assets/icons/promotionbg.svg';


export const announcements: DummyDataProps = [
    {
        date: 'Feb 11', title: "Zalora- Seller Communication Prioritization. ", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or", id: 1
    },
    {
        date: 'Feb 11', title: "[IMPORTANT] Update to API endponit limit.", description: "Dear Seller, Follewing up from our previous announcement, please note a slight change", id: 2
    },
    {
        date: 'Feb 11', title: "Covid-19 Impact on Your Operations.", description: "Dear Seller, please immediately inform your Account. Manage or SHD if your operations are impacted by", id: 3
    },
    {
        date: 'Feb 11', title: "[IMPORTANT] API endponit limit. please forward.", description: "Dear Seller, As part of our continuous efforts to improve system response time and reliability", id: 4
    },
    {
        date: 'Feb 11', title: "Number Five", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 5
    },
    {
        date: 'Feb 11', title: "Number Six", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 6
    },
    {
        date: 'Feb 11', title: "Number Seven", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 7
    },
    {
        date: 'Feb 11', title: "Number Eight", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 8
    },
    {
        date: 'Feb 11', title: "Number Nine", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 9
    },
    {
        date: 'Feb 11', title: "Number Ten", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 10
    },
    {
        date: 'Feb 11', title: "Number Eleven", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 11
    },
    {
        date: 'Feb 11', title: "Number Twelve", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 12
    },
    {
        date: 'Feb 11', title: "Number Thirteen", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 13
    },
    {
        date: 'Feb 11', title: "Number Fourteen", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 14
    },
    {
        date: 'Feb 11', title: "Number Fifteen", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 15
    },
    {
        date: 'Feb 11', title: "Number Sixteen", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 16
    },
    {
        date: 'Feb 11', title: "Number Seventeen", description: "Hi, you’ve likely seen email from Zalora Seller Helpdesk to you with the Phrase [HIGH] or ...", id: 17
    }
];

export const icons = {
    unread: announcementIcon,
    previous: previousIcon,
    next: nextIcon,
    hamburger: hamburger
}

export const promotions = [
    {
        title: "Lifestyle:  3.3 PAYDAY 2022    15% off min spend SGD 100   HOME10",
        date: "28 Feb - 07 Mar 22",
        voucherDiscount: "10%",
        deadline: "22 Feb 22",
        sellerFundedPortion: "100%",
        bgImage: promotionbg,
        countDown: {
            days: "21",
            hours: "5",
            minutes: "16",
        },
        timeColor: "rgba(115, 103, 240, 0.2)",
        approved: 1,
        pending: 1,
        rejected: 1,
    },

    {
        title: "Lifestyle:  3.3 PAYDAY 2022    15% off min spend SGD 100   HOME10",
        date: "28 Feb - 07 Mar 22",
        voucherDiscount: "10%",
        deadline: "22 Feb 22",
        sellerFundedPortion: "100%",
        bgImage: promotionbg,
        countDown: {
            days: "47",
            hours: "17",
            minutes: "21",
        },
        timeColor: "rgba(255, 159, 67, 0.3)",
        approved: 1,
        pending: 1,
        rejected: 1,
    },

    {
        title: "Lifestyle:  3.3 PAYDAY 2022    15% off min spend SGD 100   HOME10",
        date: "28 Feb - 07 Mar 22",
        voucherDiscount: "10%",
        deadline: "22 Feb 22",
        sellerFundedPortion: "100%",
        bgImage: promotionbg,
        countDown: {
            days: "12",
            hours: "3",
            minutes: "16",
        },
        timeColor: "rgba(234, 84, 85, 0.3)",
        approved: 1,
        pending: 1,
        rejected: 1,
    },

    {
        title: "Lifestyle:  3.3 PAYDAY 2022    15% off min spend SGD 100   HOME10",
        date: "28 Feb - 07 Mar 22",
        voucherDiscount: "10%",
        deadline: "22 Feb 22",
        sellerFundedPortion: "100%",
        bgImage: promotionbg,
        countDown: {
            days: "01",
            hours: "25",
            minutes: "01",
        },
        timeColor: "rgba(115, 103, 240, 1)",
        approved: 1,
        pending: 1,
        rejected: 1,
    },
]