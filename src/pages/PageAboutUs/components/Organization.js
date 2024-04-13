import React, { useState } from 'react';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { OrganizationChart } from 'primereact/organizationchart';


const Organization = () => {
    const [data] = useState([
        {
          label: '會長',
          expanded: true,
          data: 'ar',
          children: [
            {
              label: '副會長',
              expanded: true,
              data: 'ar',
              children: [
                {
                  label: '文書',
                  data: 'ar',
                },
                {
                  label: '會計',
                  data: 'hr',
                },
              ],
            },
            {
              label: '副會長',
              expanded: true,
              data: 'fr',
              children: [
                {
                  label: '活動',
                  data: 'fr',
                },
                {
                  label: '設計',
                  data: 'ma',
                },
              ],
            },
          ],
        },
      ]);

    return <div>
        <div className='news-title-container'> 組織架構</div>
        <OrganizationChart value={data} />

    </div>
}

export default Organization