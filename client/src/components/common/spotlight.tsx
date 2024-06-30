import { rem } from '@mantine/core';
import { Spotlight, SpotlightActionData, SpotlightActionGroupData } from '@mantine/spotlight';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function MainSpotLight() {
    const navigate = useNavigate();

    const actions: (SpotlightActionGroupData | SpotlightActionData)[] = [
        {
            group: 'Pages',
            actions: [
                {
                    id: 'home',
                    label: 'Home page',
                    description: 'Where we started',
                    onClick: () => navigate('/'),
                },
                // ...routes.map((route) => ({
                //     id: route.name,
                //     label: route.name,
                //     description: `Go to ${route.name} page`,
                //     onClick: () => navigate(route.path),
                // })),
            ],
        },
    ];

    return (
        <>
            {/* <Button onClick={spotlight.open}>Open spotlight</Button> */}
            <Spotlight
                actions={actions}
                nothingFound="Nothing found..."
                highlightQuery
                shortcut={['Ctrl+K', 'mod + K']}
                limit={7}
                // maxHeight={400}
                searchProps={{
                    leftSection: <FiSearch style={{ width: rem(20), height: rem(20) }} />,
                    placeholder: 'Search...',
                }}
            />
        </>
    );
}
