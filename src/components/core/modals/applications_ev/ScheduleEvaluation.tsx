import { scheduleEvaluationState } from '@/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';
import MainModal from '../MainModal';
import { Button } from '@mantine/core';
import CustomInput from '../../inputs/CustomInput';
import { DateInput } from '@mantine/dates';
import { BiCalendar } from 'react-icons/bi';
import { notifications } from '@mantine/notifications';
import { AuthApi } from '@/lib/config/axios.config';

interface Props {
   onClose: () => void;
}

const ScheduleEvaluation = ({ onClose }: Props) => {
   const [evaluationSchedule, _] = useRecoilState(scheduleEvaluationState);
   const [evaluationData, setEvaluationData] = React.useState({
      date: new Date(),
   });
   const [loading, setLoading] = React.useState(false);

   const scheduleEvaluation = async () => {
      setLoading(true);
      try {
         const res = await AuthApi.post('/schedule-evaluation', evaluationData);
         console.log('---res---', res);
         notifications.show({
            title: 'Success',
            message: 'Evaluation Scheduled Successfully',
            color: 'teal',
         });
      } catch (error) {
         notifications.show({
            title: 'Error',
            message: 'An error occured',
            color: 'red',
         });
      }
   };

   return (
      <MainModal
         open={evaluationSchedule.state}
         onClose={onClose}
         title="Schedule Evaluation"
         size={'xl'}
         // description=''
      >
         <div className=" w-full flex flex-col">
            <div className=" grid md:grid-cols-2 w-full gap-3 gap-y-8 mt-5">
               <CustomInput label="Institution Name" value={evaluationSchedule.data?.name} />
               <CustomInput label="Trade" value={evaluationSchedule.data?.trade} />
               <CustomInput label="Date Applied" value={evaluationSchedule.data?.date} />
               <CustomInput label="Evaluation Date">
                  <DateInput
                     className=" border-b border-black"
                     classNames={{ wrapper: 'border-none', input: 'border-none !border-b' }}
                     rightSection={<BiCalendar />}
                  />
               </CustomInput>
            </div>
            <Button onClick={onClose} className="mt-8 w-fit mx-auto" size="sm" radius={'xl'}>
               Schedule
            </Button>
         </div>
      </MainModal>
   );
};

export default ScheduleEvaluation;
