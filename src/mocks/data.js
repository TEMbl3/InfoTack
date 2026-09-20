export const mockAuthors = [
  { id: 1, full_name: 'Лев Толстой' },
  { id: 2, full_name: 'Фёдор Достоевский' },
  { id: 3, full_name: 'Михаил Булгаков' },
  { id: 4, full_name: 'Антон Чехов' },
  { id: 5, full_name: 'Александр Пушкин' },
  { id: 6, full_name: 'Эрих Мария Ремарк' },
  { id: 7, full_name: 'Джордж Оруэлл' },
  { id: 8, full_name: 'Габриэль Гарсиа Маркес' }
]

export const mockBooks = [
  {
    id: 1,
    title: 'Война и мир',
    year: 1869,
    description: 'Роман-эпопея о судьбах нескольких дворянских семей на фоне войн с Наполеоном.',
    isbn: '978-5-17-118988-4',
    cover_url: 'https://yandex-images.clstorage.net/e10kE0316/fd8302IMnu9t/Vp-g-OVLlf1g-UEJTV5wAlgYWJxib_Q--CkWUsjHJC6bn721svMwLc-U6OuUeBh7u_E36LIeCJ48gr0yLTvLaDL6hM0BO5WsJEnlyO2fcVaZzGnIQ_-0S2jsYCR6gBONXHy_N_UUpI3KIS06UNxsDU1wIs0VTF66LnFs5csefWxEv8CJMwu3nHc4AAnMLgKGauiZu9BYpm_e6SLV27BxDhwdDIVHtzZOWkOPWwYvH5_NhDPNN00P2SwjH8Q6_M8uBvwTOaKp5I_WWMJLLByCxTvLOVjAeQYvP4oRp5izczycfY-H1SdkDSrSbvjVLG7O3OWCH8aczDhuUe00Sj-fD6TdAalBWAWdFKmhi-2NU3Q4qLh5M1pm_n0Z81V5wIMu_J78NtanFJ9687_JpKzPPu5Eg60H71yJ3WE_VJjtrHzm_KPJA2vnTwT6Q-nMHkHXuWorijGLli0uqyHn6wJQzp_c7rcXl1X8m6HN68W8z22t1TA8hi7_yh5x3xa6DL-Pl30gmKMaBvwU20GZ7B5R1ip6SZgh-NYcbJsDlOsDEy28ns-GtiRUj5vQ7AukX4-e3scxnyZur8k-AT63WD58v6b_UulhWmfOdWpjup0PU_Tb2ZjqgNkVDs_ZIfd60qL_nvweJCeWdF9KIY1bhG9sPHwUc56UTLzILcEO9boPbNwlvZOLAsnk3DdLs_sNjKHUacipKgGY5L2cayLE2lKzXlwMjMQlBlX8-CNeGkWcDd6Nh3DtRr582A5yPVZYjH6NpV9ye3HKFZxmO4FJ7Q4zJApKm-pgORbv_IpTBUoiUcx9_j3WFSUmP0ngb5sUr3zcT9aj_teOLeoeUe3UWC7OTETMIZsxKRaNFohSO4_MsqRJ6KvpEbrF7k2pYWcaIrG-Pm38xPWkZe8YcEwLhH-ufK2lMI7nTq1pjLGftBs-XK-EfsF5MPnknqWKA4i8nLH0Cut6mKJbppzPm2GXA',
    authors: [{ id: 1, full_name: 'Лев Толстой' }]
  },
  {
    id: 2,
    title: 'Преступление и наказание',
    year: 1866,
    description: 'Психологический роман о нравственном выборе, вине и искуплении.',
    isbn: '978-5-17-090995-7',
    cover_url: 'https://yandex-images.clstorage.net/e10kE0316/fd8302IMnu9t/Vp-g-OVLlf1g-UEJTV5wAlgYWJxib_Q--CkWUsjHJC6bn721svMwLc-U6OuUeBh7u_E36LIeCJ48gr0yLTvLaDL6hM0BO5WsJEnlyO2fcVaZzGnIQ_-0S2jsYCR6gBONXHy_N_UUpI3KIS06UNxsDU1wIs0VTF66LnFs5csefWxEv8CJMwu3nHc4AAnMLgKGauiZu9BYpm_e6SLV27BxDhwdDIVHtzZOWkOPWwYvH5_NhDPNN00P2SwjH8Q6_M8uBvwTOaKp5I_WWMJLLByCxTvLOVjAeQYvP4oRp5izczycfY-H1SdkDSrSbvjVLG7O3OWCH8aczDhuUe00Sj-fD6TdAalBWAWdFKmhi-2NU3Q4qLh5M1pm_n0Z81V5wIMu_J78NtanFJ9687_JpKzPPu5Eg60H71yJ3WE_VJjtrHzm_KPJA2vnTwT6Q-nMHkHXuWorijGLli0uqyHn6wJQzp_c7rcXl1X8m6HN68W8z22t1TA8hi7_yh5x3xa6DL-Pl30gmKMaBvwU20GZ7B5R1ip6SZgh-NYcbJsDlOsDEy28ns-GtiRUj5vQ7AukX4-e3scxnyZur8k-AT63WD58v6b_UulhWmfOdWpjup0PU_Tb2ZjqgNkVDs_ZIfd60qL_nvweJCeWdF9KIY1bhG9sPHwUc56UTLzILcEO9boPbNwlvZOLAsnk3DdLs_sNjKHUacipKgGY5L2cayLE2lKzXlwMjMQlBlX8-CNeGkWcDd6Nh3DtRr582A5yPVZYjH6NpV9ye3HKFZxmO4FJ7Q4zJApKm-pgORbv_IpTBUoiUcx9_j3WFSUmP0ngb5sUr3zcT9aj_teOLeoeUe3UWC7OTETMIZsxKRaNFohSO4_MsqRJ6KvpEbrF7k2pYWcaIrG-Pm38xPWkZe8YcEwLhH-ufK2lMI7nTq1pjLGftBs-XK-EfsF5MPnknqWKA4i8nLH0Cut6mKJbppzPm2GXA',
    authors: [{ id: 2, full_name: 'Фёдор Достоевский' }]
  },
  {
    id: 3,
    title: 'Мастер и Маргарита',
    year: 1967,
    description: 'Мистический роман о Москве, любви, свободе и ответственности.',
    isbn: '978-5-17-115244-5',
    cover_url: 'https://yandex-images.clstorage.net/e10kE0316/fd8302IMnu9t/Vp-g-OVLlf1g-UEJTV5wAlgYWJxib_Q--CkWUsjHJC6bn721svMwLc-U6OuUeBh7u_E36LIeCJ48gr0yLTvLaDL6hM0BO5WsJEnlyO2fcVaZzGnIQ_-0S2jsYCR6gBONXHy_N_UUpI3KIS06UNxsDU1wIs0VTF66LnFs5csefWxEv8CJMwu3nHc4AAnMLgKGauiZu9BYpm_e6SLV27BxDhwdDIVHtzZOWkOPWwYvH5_NhDPNN00P2SwjH8Q6_M8uBvwTOaKp5I_WWMJLLByCxTvLOVjAeQYvP4oRp5izczycfY-H1SdkDSrSbvjVLG7O3OWCH8aczDhuUe00Sj-fD6TdAalBWAWdFKmhi-2NU3Q4qLh5M1pm_n0Z81V5wIMu_J78NtanFJ9687_JpKzPPu5Eg60H71yJ3WE_VJjtrHzm_KPJA2vnTwT6Q-nMHkHXuWorijGLli0uqyHn6wJQzp_c7rcXl1X8m6HN68W8z22t1TA8hi7_yh5x3xa6DL-Pl30gmKMaBvwU20GZ7B5R1ip6SZgh-NYcbJsDlOsDEy28ns-GtiRUj5vQ7AukX4-e3scxnyZur8k-AT63WD58v6b_UulhWmfOdWpjup0PU_Tb2ZjqgNkVDs_ZIfd60qL_nvweJCeWdF9KIY1bhG9sPHwUc56UTLzILcEO9boPbNwlvZOLAsnk3DdLs_sNjKHUacipKgGY5L2cayLE2lKzXlwMjMQlBlX8-CNeGkWcDd6Nh3DtRr582A5yPVZYjH6NpV9ye3HKFZxmO4FJ7Q4zJApKm-pgORbv_IpTBUoiUcx9_j3WFSUmP0ngb5sUr3zcT9aj_teOLeoeUe3UWC7OTETMIZsxKRaNFohSO4_MsqRJ6KvpEbrF7k2pYWcaIrG-Pm38xPWkZe8YcEwLhH-ufK2lMI7nTq1pjLGftBs-XK-EfsF5MPnknqWKA4i8nLH0Cut6mKJbppzPm2GXA',
    authors: [{ id: 3, full_name: 'Михаил Булгаков' }]
  },
  {
    id: 4,
    title: '1984',
    year: 1949,
    description: 'Антиутопия о тотальном контроле, языке и личной свободе.',
    isbn: '978-0-452-28423-4',
    cover_url: 'https://yandex-images.clstorage.net/e10kE0316/fd8302IMnu9t/Vp-g-OVLlf1g-UEJTV5wAlgYWJxib_Q--CkWUsjHJC6bn721svMwLc-U6OuUeBh7u_E36LIeCJ48gr0yLTvLaDL6hM0BO5WsJEnlyO2fcVaZzGnIQ_-0S2jsYCR6gBONXHy_N_UUpI3KIS06UNxsDU1wIs0VTF66LnFs5csefWxEv8CJMwu3nHc4AAnMLgKGauiZu9BYpm_e6SLV27BxDhwdDIVHtzZOWkOPWwYvH5_NhDPNN00P2SwjH8Q6_M8uBvwTOaKp5I_WWMJLLByCxTvLOVjAeQYvP4oRp5izczycfY-H1SdkDSrSbvjVLG7O3OWCH8aczDhuUe00Sj-fD6TdAalBWAWdFKmhi-2NU3Q4qLh5M1pm_n0Z81V5wIMu_J78NtanFJ9687_JpKzPPu5Eg60H71yJ3WE_VJjtrHzm_KPJA2vnTwT6Q-nMHkHXuWorijGLli0uqyHn6wJQzp_c7rcXl1X8m6HN68W8z22t1TA8hi7_yh5x3xa6DL-Pl30gmKMaBvwU20GZ7B5R1ip6SZgh-NYcbJsDlOsDEy28ns-GtiRUj5vQ7AukX4-e3scxnyZur8k-AT63WD58v6b_UulhWmfOdWpjup0PU_Tb2ZjqgNkVDs_ZIfd60qL_nvweJCeWdF9KIY1bhG9sPHwUc56UTLzILcEO9boPbNwlvZOLAsnk3DdLs_sNjKHUacipKgGY5L2cayLE2lKzXlwMjMQlBlX8-CNeGkWcDd6Nh3DtRr582A5yPVZYjH6NpV9ye3HKFZxmO4FJ7Q4zJApKm-pgORbv_IpTBUoiUcx9_j3WFSUmP0ngb5sUr3zcT9aj_teOLeoeUe3UWC7OTETMIZsxKRaNFohSO4_MsqRJ6KvpEbrF7k2pYWcaIrG-Pm38xPWkZe8YcEwLhH-ufK2lMI7nTq1pjLGftBs-XK-EfsF5MPnknqWKA4i8nLH0Cut6mKJbppzPm2GXA',
    authors: [{ id: 7, full_name: 'Джордж Оруэлл' }]
  },
  {
    id: 5,
    title: 'Три товарища',
    year: 1936,
    description: 'История дружбы и любви трёх друзей в Германии между войнами.',
    isbn: '978-5-17-090995-8',
    cover_url: 'https://yandex-images.clstorage.net/e10kE0316/fd8302IMnu9t/Vp-g-OVLlf1g-UEJTV5wAlgYWJxib_Q--CkWUsjHJC6bn721svMwLc-U6OuUeBh7u_E36LIeCJ48gr0yLTvLaDL6hM0BO5WsJEnlyO2fcVaZzGnIQ_-0S2jsYCR6gBONXHy_N_UUpI3KIS06UNxsDU1wIs0VTF66LnFs5csefWxEv8CJMwu3nHc4AAnMLgKGauiZu9BYpm_e6SLV27BxDhwdDIVHtzZOWkOPWwYvH5_NhDPNN00P2SwjH8Q6_M8uBvwTOaKp5I_WWMJLLByCxTvLOVjAeQYvP4oRp5izczycfY-H1SdkDSrSbvjVLG7O3OWCH8aczDhuUe00Sj-fD6TdAalBWAWdFKmhi-2NU3Q4qLh5M1pm_n0Z81V5wIMu_J78NtanFJ9687_JpKzPPu5Eg60H71yJ3WE_VJjtrHzm_KPJA2vnTwT6Q-nMHkHXuWorijGLli0uqyHn6wJQzp_c7rcXl1X8m6HN68W8z22t1TA8hi7_yh5x3xa6DL-Pl30gmKMaBvwU20GZ7B5R1ip6SZgh-NYcbJsDlOsDEy28ns-GtiRUj5vQ7AukX4-e3scxnyZur8k-AT63WD58v6b_UulhWmfOdWpjup0PU_Tb2ZjqgNkVDs_ZIfd60qL_nvweJCeWdF9KIY1bhG9sPHwUc56UTLzILcEO9boPbNwlvZOLAsnk3DdLs_sNjKHUacipKgGY5L2cayLE2lKzXlwMjMQlBlX8-CNeGkWcDd6Nh3DtRr582A5yPVZYjH6NpV9ye3HKFZxmO4FJ7Q4zJApKm-pgORbv_IpTBUoiUcx9_j3WFSUmP0ngb5sUr3zcT9aj_teOLeoeUe3UWC7OTETMIZsxKRaNFohSO4_MsqRJ6KvpEbrF7k2pYWcaIrG-Pm38xPWkZe8YcEwLhH-ufK2lMI7nTq1pjLGftBs-XK-EfsF5MPnknqWKA4i8nLH0Cut6mKJbppzPm2GXA',
    authors: [{ id: 6, full_name: 'Эрих Мария Ремарк' }]
  },
  {
    id: 6,
    title: 'Сто лет одиночества',
    year: 1967,
    description: 'Семейная сага рода Буэндиа и история вымышленного города Макондо.',
    isbn: '978-5-17-089700-2',
    cover_url: 'https://yandex-images.clstorage.net/e10kE0316/fd8302IMnu9t/Vp-g-OVLlf1g-UEJTV5wAlgYWJxib_Q--CkWUsjHJC6bn721svMwLc-U6OuUeBh7u_E36LIeCJ48gr0yLTvLaDL6hM0BO5WsJEnlyO2fcVaZzGnIQ_-0S2jsYCR6gBONXHy_N_UUpI3KIS06UNxsDU1wIs0VTF66LnFs5csefWxEv8CJMwu3nHc4AAnMLgKGauiZu9BYpm_e6SLV27BxDhwdDIVHtzZOWkOPWwYvH5_NhDPNN00P2SwjH8Q6_M8uBvwTOaKp5I_WWMJLLByCxTvLOVjAeQYvP4oRp5izczycfY-H1SdkDSrSbvjVLG7O3OWCH8aczDhuUe00Sj-fD6TdAalBWAWdFKmhi-2NU3Q4qLh5M1pm_n0Z81V5wIMu_J78NtanFJ9687_JpKzPPu5Eg60H71yJ3WE_VJjtrHzm_KPJA2vnTwT6Q-nMHkHXuWorijGLli0uqyHn6wJQzp_c7rcXl1X8m6HN68W8z22t1TA8hi7_yh5x3xa6DL-Pl30gmKMaBvwU20GZ7B5R1ip6SZgh-NYcbJsDlOsDEy28ns-GtiRUj5vQ7AukX4-e3scxnyZur8k-AT63WD58v6b_UulhWmfOdWpjup0PU_Tb2ZjqgNkVDs_ZIfd60qL_nvweJCeWdF9KIY1bhG9sPHwUc56UTLzILcEO9boPbNwlvZOLAsnk3DdLs_sNjKHUacipKgGY5L2cayLE2lKzXlwMjMQlBlX8-CNeGkWcDd6Nh3DtRr582A5yPVZYjH6NpV9ye3HKFZxmO4FJ7Q4zJApKm-pgORbv_IpTBUoiUcx9_j3WFSUmP0ngb5sUr3zcT9aj_teOLeoeUe3UWC7OTETMIZsxKRaNFohSO4_MsqRJ6KvpEbrF7k2pYWcaIrG-Pm38xPWkZe8YcEwLhH-ufK2lMI7nTq1pjLGftBs-XK-EfsF5MPnknqWKA4i8nLH0Cut6mKJbppzPm2GXA',
    authors: [{ id: 8, full_name: 'Габриэль Гарсиа Маркес' }]
  },
  {
    id: 7,
    title: 'Евгений Онегин',
    year: 1833,
    description: 'Роман в стихах об Онегине, Татьяне, любви и светском обществе.',
    isbn: '978-5-17-102204-5',
    cover_url: 'https://yandex-images.clstorage.net/e10kE0316/fd8302IMnu9t/Vp-g-OVLlf1g-UEJTV5wAlgYWJxib_Q--CkWUsjHJC6bn721svMwLc-U6OuUeBh7u_E36LIeCJ48gr0yLTvLaDL6hM0BO5WsJEnlyO2fcVaZzGnIQ_-0S2jsYCR6gBONXHy_N_UUpI3KIS06UNxsDU1wIs0VTF66LnFs5csefWxEv8CJMwu3nHc4AAnMLgKGauiZu9BYpm_e6SLV27BxDhwdDIVHtzZOWkOPWwYvH5_NhDPNN00P2SwjH8Q6_M8uBvwTOaKp5I_WWMJLLByCxTvLOVjAeQYvP4oRp5izczycfY-H1SdkDSrSbvjVLG7O3OWCH8aczDhuUe00Sj-fD6TdAalBWAWdFKmhi-2NU3Q4qLh5M1pm_n0Z81V5wIMu_J78NtanFJ9687_JpKzPPu5Eg60H71yJ3WE_VJjtrHzm_KPJA2vnTwT6Q-nMHkHXuWorijGLli0uqyHn6wJQzp_c7rcXl1X8m6HN68W8z22t1TA8hi7_yh5x3xa6DL-Pl30gmKMaBvwU20GZ7B5R1ip6SZgh-NYcbJsDlOsDEy28ns-GtiRUj5vQ7AukX4-e3scxnyZur8k-AT63WD58v6b_UulhWmfOdWpjup0PU_Tb2ZjqgNkVDs_ZIfd60qL_nvweJCeWdF9KIY1bhG9sPHwUc56UTLzILcEO9boPbNwlvZOLAsnk3DdLs_sNjKHUacipKgGY5L2cayLE2lKzXlwMjMQlBlX8-CNeGkWcDd6Nh3DtRr582A5yPVZYjH6NpV9ye3HKFZxmO4FJ7Q4zJApKm-pgORbv_IpTBUoiUcx9_j3WFSUmP0ngb5sUr3zcT9aj_teOLeoeUe3UWC7OTETMIZsxKRaNFohSO4_MsqRJ6KvpEbrF7k2pYWcaIrG-Pm38xPWkZe8YcEwLhH-ufK2lMI7nTq1pjLGftBs-XK-EfsF5MPnknqWKA4i8nLH0Cut6mKJbppzPm2GXA',
    authors: [{ id: 5, full_name: 'Александр Пушкин' }]
  },
  {
    id: 8,
    title: 'Рассказы',
    year: 1898,
    description: 'Избранные рассказы классика русской литературы.',
    isbn: '978-5-17-101202-2',
    cover_url: 'https://yandex-images.clstorage.net/e10kE0316/fd8302IMnu9t/Vp-g-OVLlf1g-UEJTV5wAlgYWJxib_Q--CkWUsjHJC6bn721svMwLc-U6OuUeBh7u_E36LIeCJ48gr0yLTvLaDL6hM0BO5WsJEnlyO2fcVaZzGnIQ_-0S2jsYCR6gBONXHy_N_UUpI3KIS06UNxsDU1wIs0VTF66LnFs5csefWxEv8CJMwu3nHc4AAnMLgKGauiZu9BYpm_e6SLV27BxDhwdDIVHtzZOWkOPWwYvH5_NhDPNN00P2SwjH8Q6_M8uBvwTOaKp5I_WWMJLLByCxTvLOVjAeQYvP4oRp5izczycfY-H1SdkDSrSbvjVLG7O3OWCH8aczDhuUe00Sj-fD6TdAalBWAWdFKmhi-2NU3Q4qLh5M1pm_n0Z81V5wIMu_J78NtanFJ9687_JpKzPPu5Eg60H71yJ3WE_VJjtrHzm_KPJA2vnTwT6Q-nMHkHXuWorijGLli0uqyHn6wJQzp_c7rcXl1X8m6HN68W8z22t1TA8hi7_yh5x3xa6DL-Pl30gmKMaBvwU20GZ7B5R1ip6SZgh-NYcbJsDlOsDEy28ns-GtiRUj5vQ7AukX4-e3scxnyZur8k-AT63WD58v6b_UulhWmfOdWpjup0PU_Tb2ZjqgNkVDs_ZIfd60qL_nvweJCeWdF9KIY1bhG9sPHwUc56UTLzILcEO9boPbNwlvZOLAsnk3DdLs_sNjKHUacipKgGY5L2cayLE2lKzXlwMjMQlBlX8-CNeGkWcDd6Nh3DtRr582A5yPVZYjH6NpV9ye3HKFZxmO4FJ7Q4zJApKm-pgORbv_IpTBUoiUcx9_j3WFSUmP0ngb5sUr3zcT9aj_teOLeoeUe3UWC7OTETMIZsxKRaNFohSO4_MsqRJ6KvpEbrF7k2pYWcaIrG-Pm38xPWkZe8YcEwLhH-ufK2lMI7nTq1pjLGftBs-XK-EfsF5MPnknqWKA4i8nLH0Cut6mKJbppzPm2GXA',
    authors: [{ id: 4, full_name: 'Антон Чехов' }]
  }
]
