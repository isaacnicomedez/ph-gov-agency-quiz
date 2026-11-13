interface Agency {
    acronym: string;
    fullName: string;
}

export const agencies: Agency[] = [
// Executive Departments
    {
        acronym: "DepEd", fullName: "Department of Education"
    },
    {
        acronym: "DOH", fullName: "Department of Health"
    },
    {
        acronym: "DPWH", fullName: "Department of Public Works and Highways"
    },
    {
        acronym: "DILG", fullName: "Department of the Interior and Local Government"
    },
    {
        acronym: "DSWD", fullName: "Department of Social Welfare and Development"
    },
    {
        acronym: "DOLE", fullName: "Department of Labor and Employment"
    },
    {
        acronym: "DTI", fullName: "Department of Trade and Industry"
    },
    {
        acronym: "DOF", fullName: "Department of Finance"
    },
    {
        acronym: "DOJ", fullName: "Department of Justice"
    },
    {
        acronym: "DFA", fullName: "Department of Foreign Affairs"
    },
    {
        acronym: "DND", fullName: "Department of National Defense"
    },
    {
        acronym: "DA", fullName: "Department of Agriculture"
    },
    {
        acronym: "DENR", fullName: "Department of Environment and Natural Resources"
    },
    {
        acronym: "DOTr", fullName: "Department of Transportation"
    },
    {
        acronym: "DICT", fullName: "Department of Information and Communications Technology"
    },
    {
        acronym: "DOST", fullName: "Department of Science and Technology"
    },
    {
        acronym: "DOE", fullName: "Department of Energy"
    },
    {
        acronym: "DOT", fullName: "Department of Tourism"
    },
    {
        acronym: "DBM", fullName: "Department of Budget and Management"
    },
    {
        acronym: "DHSUD", fullName: "Department of Human Settlements and Urban Development"
    },
    {
        acronym: "DMW", fullName: "Department of Migrant Workers"
    },
    {
        acronym: "DAR", fullName: "Department of Agrarian Reform"
    },
    {
        acronym: "DEPDev", fullName: "Department of Economy, Planning, and Development"
    },

// Constitutional & Independent Offices
    {
        acronym: "COA", fullName: "Commission on Audit"
    },
    {
        acronym: "COMELEC", fullName: "Commission on Elections"
    },
    {
        acronym: "CSC", fullName: "Civil Service Commission"
    },
    {
        acronym: "CHR", fullName: "Commission on Human Rights"
    },
    {
        acronym: "OMB", fullName: "Office of the Ombudsman"
    },
    {
        acronym: "OSG", fullName: "Office of the Solicitor General"
    },
    {
        acronym: "PCO", fullName: "Presidential Communications Office"
    },
    {
        acronym: "NSC", fullName: "National Security Council"
    },

// Revenue, Statistics & Economic Regulation
    {
        acronym: "BIR", fullName: "Bureau of Internal Revenue"
    },
    {
        acronym: "BOC", fullName: "Bureau of Customs"
    },
    {
        acronym: "PSA", fullName: "Philippine Statistics Authority"
    },
    {
        acronym: "SEC", fullName: "Securities and Exchange Commission"
    },
    {
        acronym: "PCC", fullName: "Philippine Competition Commission"
    },
    {
        acronym: "PEZA", fullName: "Philippine Economic Zone Authority"
    },
    {
        acronym: "IPOPHL", fullName: "Intellectual Property Office of the Philippines"
    },
    {
        acronym: "ERC", fullName: "Energy Regulatory Commission"
    },
    {
        acronym: "NTC", fullName: "National Telecommunications Commission"
    },

// Law Enforcement, Defense & Justice
    {
        acronym: "PNP", fullName: "Philippine National Police"
    },
    {
        acronym: "NAPOLCOM", fullName: "National Police Commission"
    },
    {
        acronym: "NBI", fullName: "National Bureau of Investigation"
    },
    {
        acronym: "BFP", fullName: "Bureau of Fire Protection"
    },
    {
        acronym: "BJMP", fullName: "Bureau of Jail Management and Penology"
    },
    {
        acronym: "BuCor", fullName: "Bureau of Corrections"
    },
    {
        acronym: "PDEA", fullName: "Philippine Drug Enforcement Agency"
    },
    {
        acronym: "AFP", fullName: "Armed Forces of the Philippines"
    },
    {
        acronym: "PCG", fullName: "Philippine Coast Guard"
    },
    {
        acronym: "BI", fullName: "Bureau of Immigration"
    },
    {
        acronym: "PAO", fullName: "Public Attorney's Office"
    },

// Science, Weather & Disaster Management
    {
        acronym: "PAGASA", fullName: "Philippine Atmospheric, Geophysical and Astronomical Services Administration"
    },
    {
        acronym: "PHIVOLCS", fullName: "Philippine Institute of Volcanology and Seismology"
    },
    {
        acronym: "NDRRMC", fullName: "National Disaster Risk Reduction and Management Council"
    },
    {
        acronym: "PhilSA", fullName: "Philippine Space Agency"
    },
    {
        acronym: "PNRI", fullName: "Philippine Nuclear Research Institute"
    },
    {
        acronym: "NAMRIA", fullName: "National Mapping and Resource Information Authority"
    },

// Transportation & Development Authorities
    {
        acronym: "LTO", fullName: "Land Transportation Office"
    },
    {
        acronym: "LTFRB", fullName: "Land Transportation Franchising and Regulatory Board"
    },
    {
        acronym: "MMDA", fullName: "Metropolitan Manila Development Authority"
    },
    {
        acronym: "CAAP", fullName: "Civil Aviation Authority of the Philippines"
    },
    {
        acronym: "MARINA", fullName: "Maritime Industry Authority"
    },

// Education, Labor, Health & Culture
    {
        acronym: "CHED", fullName: "Commission on Higher Education"
    },
    {
        acronym: "TESDA", fullName: "Technical Education and Skills Development Authority"
    },
    {
        acronym: "PRC", fullName: "Professional Regulation Commission"
    },
    {
        acronym: "OWWA", fullName: "Overseas Workers Welfare Administration"
    },
    {
        acronym: "NLRC", fullName: "National Labor Relations Commission"
    },
    {
        acronym: "FDA", fullName: "Food and Drug Administration"
    },
    {
        acronym: "RITM", fullName: "Research Institute for Tropical Medicine"
    },
    {
        acronym: "BFAR", fullName: "Bureau of Fisheries and Aquatic Resources"
    },
    {
        acronym: "MTRCB", fullName: "Movie and Television Review and Classification Board"
    },
    {
        acronym: "NCCA", fullName: "National Commission for Culture and the Arts"
    },
    {
        acronym: "NHCP", fullName: "National Historical Commission of the Philippines"
    },
    {
        acronym: "KWF", fullName: "Komisyon sa Wikang Filipino"
    },
    {
        acronym: "NYC", fullName: "National Youth Commission"
    },
    {
        acronym: "PCW", fullName: "Philippine Commission on Women"
    },
    {
        acronym: "NCIP", fullName: "National Commission on Indigenous Peoples"
    }
];

console.log(agencies.length);