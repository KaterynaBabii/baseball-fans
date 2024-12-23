import { useTranslation } from 'react-i18next';
import React from 'react';
import { Flex, Text, Button, Box } from '@radix-ui/themes';
import { useMediaQuery } from 'react-responsive';

import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { CustomSelect } from '../components/CustomSelect';
import { AvatarBadge } from '../components/AvatarBadge';

interface IMenuProps {
  searchData: never[];
}

export const Menu = ({ searchData }: IMenuProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <Box className="m-5 px-2">
      <Flex direction={isMobile ? 'column' : 'row'} align="center" justify="between">
        <Flex align="center" className="gap-4" direction={isMobile ? 'column' : 'row'}>
          <Text className="px-4 w-[100px] ">{t('following')}</Text>
          <Button variant="classic" className="p-3 bg-black rounded">
            <Text className="text-white">{t('viewAll')}</Text>
          </Button>
          <AvatarBadge content="Atlanta Braves" data={[{ src: '', fallback: 'A' }]} />
          <AvatarBadge
            content="Chicago Cubs"
            data={[{ src: 'src/assets/chicagoCubs.svg', fallback: 'CN' }]}
          />
          <AvatarBadge
            content="Matthew Boyd"
            data={[
              { src: 'src/assets/chicagoCubs.svg', fallback: 'CN' },
              { src: 'src/assets/images/Player1.png', fallback: 'CN' }
            ]}
          />
        </Flex>
        <Box className="w-[300px] justify-between p-4 items-center flex-1">
          <ReactSearchAutocomplete
            items={searchData}
            showClear
            placeholder={`${t('searchForTeamPlayers')}`}
            styling={{
              borderRadius: '4px'
            }}
            autoFocus
            showNoResults
            formatResult={({ name }) => {
              return <span style={{ display: 'block', textAlign: 'left' }}>{name}</span>;
            }}
          />
        </Box>
        <Box>
          <CustomSelect />
        </Box>
      </Flex>
    </Box>
  );
};
