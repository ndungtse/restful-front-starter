import { assignEvaluationState } from '@/atoms';
import { AuthApi } from '@/lib/config/axios.config';
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import CustomInput from '../../inputs/CustomInput';
import VariableInputs from '../../inputs/VariableInputs';
import StyledSelect from '../../selects/StyledSelect';
import MainModal from '../MainModal';
import { VarInpRenderProps } from '../../inputs/VariableInputs/VarInput';

interface Props {
   onClose: () => void;
}

type AssignEvaluationData = {
   role: string | null;
   evaluator: string | null;
};

const AssignEvaluation = ({ onClose }: Props) => {
   const [isAssignEvaluation, _] = useRecoilState(assignEvaluationState);
   const [assignedEvaluators, setAssignedEvaluators] = useState<AssignEvaluationData[]>([
      {
         role: 'Main Evaluator',
         evaluator: 'Some',
      },
      {
         role: 'Secondary Evaluator',
         evaluator: 'Kick',
      },
   ]);
   const [loading, setLoading] = useState(false);

   const assignEvaluation = async () => {
      setLoading(true);
      try {
         const res = await AuthApi.post('/assign-evaluation', assignedEvaluators);
         window.log('---res---', res);
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
         open={isAssignEvaluation.state}
         onClose={onClose}
         title="Assign Evaluators"
         size={'xl'}
         closeOnClickOutside={false}
         // description=''
      >
         <div className=" w-full flex flex-col">
            <h1 className=" font-semibold text-lg mt-5">Application</h1>
            <div className=" grid md:grid-cols-2 w-full gap-3 gap-y-8 mt-2">
               <CustomInput disabled placeholder="Place for us" label="Institution Name" value={isAssignEvaluation.data?.name} />
               <CustomInput disabled placeholder="Place for them" label="Trade" value={isAssignEvaluation.data?.trade} />
            </div>
            <h1 className=" font-semibold text-lg mt-5">Evaluators</h1>
            <VariableInputs
               data={assignedEvaluators}
               onChange={(data) => {
                  window.log('---data---', data);
                  setAssignedEvaluators(data);
               }}
               className="mt-4"
            >
               <VariableInputs.Input
                  dataType={assignedEvaluators[0]} // if you want auto typing from your data
                  render={({ data, onChange }) => {
                     window.log('---e---', data);
                     return (
                        <StyledSelect
                           value={data.role}
                           onChange={(e) => onChange({ ...data, role: e })}
                           label="Role"
                           data={['Main Evaluator', 'Secondary Evaluator', 'Others']}
                           placeholder="Select Role"
                        />
                     );
                  }}
               />
               <VariableInputs.Input
                  // manually typed types
                  render={({ data, onChange }: VarInpRenderProps<AssignEvaluationData>) => (
                     <StyledSelect
                        value={data.evaluator}
                        onChange={(e) => onChange({ ...data, evaluator: e })}
                        label="Evaluator"
                        data={['Some', 'Kick']}
                        placeholder="Select Evaluator"
                     />
                  )}
               />
            </VariableInputs>
            <Button
               loading={loading}
               disabled={loading}
               onClick={assignEvaluation}
               className="mt-8 w-fit mx-auto"
               size="sm"
               radius={'xl'}
            >
               Assign
            </Button>
         </div>
      </MainModal>
   );
};

export default AssignEvaluation;
