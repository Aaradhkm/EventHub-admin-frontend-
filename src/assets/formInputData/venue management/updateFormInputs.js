export const VENUE_INPUTS = [
    {
        keyId: 1,
        fieldinfo: null,
        id: "name",
        label: "Name",
        placeholder: "Enter the venue name . . .",
        type: "text",
        name: "name",
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Allowed characters: A-Z, a-z, Numbers: 0-9. Must contain 4 characters!",
        required: true,
        noninputtag: null,
        wrapperdivclass: "sm:col-span-2",
        pattern: "^[A-Za-z0-9\\s]+$",
    },
    {
        keyId: 2,
        fieldinfo: null,
        id: "capacity",
        label: "Capacity",
        placeholder: "Crowd capacity . . .",
        type: "number",
        name: "capacity",
        wrapperdivclass: "w-full",
        noninputtag: null,
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Only numbers allowed",
        required: true,
        pattern: "\\d+",
    },
    {
        keyId: 3,
        fieldinfo: null,
        id: "management_company",
        label: "Management Company",
        placeholder: "Name of the management organisation . . .",
        type: "text",
        noninputtag: null,
        name: "management_company",
        wrapperdivclass: "sm:col-span-2",
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Allowed characters: A-Z, a-z.",
        required: true,
        pattern: "^\\S.*\\S$",
    },
    {
        keyId: 4,
        fieldinfo: null,
        id: "rental_fees",
        label: "Charges per day",
        placeholder: "Charges per day . . .",
        type: "number",
        name: "rental_fees",
        wrapperdivclass: "w-full",
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        noninputtag: null,
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Enter a valid amount !",
        pattern: "\\d+(\\.\\d{1,2})?",
        required: true,
    },

    {
        keyId: 5,
        fieldinfo: "address",
        id: "add_line_1",
        label: "Address Line 1",
        placeholder: "Address Line 1 . . .",
        // type: "text",
        name: "add_line_1",
        noninputtag: null,
        rows: 4,
        labelclass: "block text-sm font-medium text-gray-400",
        className: "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 dark:text-black",
        wrapperdivclass: "sm:col-span-3",
        error:
        "Should not contain charecters other than alphabets, spaces, numbers and special symbols( , . - )",
        pattern: "^[a-zA-Z0-9\\s,.\\-]*$",
        required: true,
    },
    {
        keyId: 6,
        fieldinfo: "address",
        id: "add_line_2",
        label: "Address Line 2",
        placeholder: "Address Line 2 . . .",
        // type: "text",
        name: "add_line_2",
        noninputtag: null,
        rows: 4,
        labelclass: "block text-sm font-medium text-gray-400",
        className: "mt-1 p-2 w-full border text-black rounded-md focus:border-gray-200 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300",
        error: "Should contain only numbers, no white spaces, no alphabets, no special charecters except '+'.",
        wrapperdivclass: "sm:col-span-3",
        pattern: "^[a-zA-Z0-9\\s,.\\-]*$",
        required: false,
    },
    {
        keyId: 7,
        fieldinfo: "address",
        id: "street",
        label: "Street",
        placeholder: "Name of the street . . .",
        type: "text",
        noninputtag: null,
        name: "street",
        wrapperdivclass: "w-full",
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Allowed characters: A-Z, a-z, 0-9.",
        required: false,
        // pattern: "^[A-Za-z0-9\\s]+$",
    },
    {
        keyId: 8,
        id: "city",
        fieldinfo: "address",
        label: "City",
        placeholder: "Name of the city . . .",
        type: "text",
        noninputtag: null,
        name: "city",
        wrapperdivclass: "w-full",
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Allowed characters: A-Z, a-z, 0-9.",
        required: true,
        pattern: "^[A-Za-z0-9\\s]+$",
    },
    {
        keyId: 9,
        id: "state",
        label: "State",
        fieldinfo: "address",
        placeholder: "Name of the state . . .",
        type: "text",
        noninputtag: null,
        name: "state",
        wrapperdivclass: "w-full",
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Allowed characters: A-Z, a-z, 0-9.",
        required: true,
        pattern: "^[A-Za-z0-9\\s]+$",
    },
    {
        keyId: 10,
        id: "country",
        label: "Country",
        fieldinfo: "address",
        placeholder: "Name of the country . . .",
        type: "text",
        noninputtag: null,
        name: "country",
        wrapperdivclass: "w-full",
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Allowed characters: A-Z, a-z, 0-9.",
        required: true,
        pattern: "^[A-Za-z0-9\\s]+$",
    },
    {
        keyId: 11,
        id: "pincode",
        fieldinfo: "address",
        label: "Pincode",
        placeholder: "Pincode . . .",
        type: "number",
        name: "pincode",
        wrapperdivclass: "w-full",
        noninputtag: null,
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Only numbers allowed",
        required: true,
        pattern: "\\d+",
    },
    {
        keyId: 12,
        id: "lat_long",
        fieldinfo: "address",
        label: "Geo-Coordinates",
        placeholder: "Coordinates . . .",
        type: "text",
        name: "lat_long",
        wrapperdivclass: "sm:col-span-3",
        noninputtag: null,
        labelclass: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
        error: "Enter valid coordinates",
        required: true,
        pattern: "^-?(\\d{1,2}(\\.\\d+)?|180),-?(\\d{1,2}(\\.\\d+)?|90)$",
    },
    {
        keyId: 13,
        id: "description",
        fieldinfo: null,
        label: "Venue description",
        placeholder: "Description . . .",
        // type: "text",
        name: "description",
        noninputtag: {
            type: "textarea",
        },
        rows: 4,
        labelclass: "block text-sm font-medium text-gray-400",
        className: "mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 text-black",
        error: "Not valid",
        wrapperdivclass: "sm:col-span-3",
        pattern: "^[a-zA-Z0-9\\s,.-]*$",
        required: true,
    },
];