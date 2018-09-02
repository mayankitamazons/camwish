export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info'
      },
    },
    
   
    {
      name: 'Webiste Setting',
      url: '#',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Category',
          url: '/superadmin/category',
          icon: 'icon-puzzle',
        },
        {
          name: 'Willingness',
         url: '/superadmin/willness',
          icon: 'icon-puzzle',
        },
        {
          name: 'Apperances',
          url: '/superadmin/apperences',
          icon: 'icon-puzzle',
        },
       
      ],
    },
    {
      name: 'Model',
      url: '/superadmin/models',
      icon: 'icon-cursor',
     
    },
   
  ],
};
