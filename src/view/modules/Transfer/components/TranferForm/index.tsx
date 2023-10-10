import React, {ChangeEvent, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {useTheme} from "@mui/material/styles";
import {ErrorMessage, Form, Formik, FormikValues} from "formik";
import ActionButton from "@/view/components/forms/ActionButton";
import InputField from "@/view/components/forms/inputs/InputField";
import {Body2, Body} from "@/view/components/typography";
import SelectField from "@/view/components/forms/inputs/SelectField";
import DatePicker from "@/view/components/DatePicker";

interface Props {
  selectedHotWallet?: any | null;
  onClick: ({
    date, currency, amount
  }: {date: Date, currency: string; amount: string;}) => void;
}

interface Bill {
  date: Date,
  currency: string,
  amount: number,
  note: string,
  id: number,
}

function TranferForm({
  onClick,
}:Props) {
  const [bills, setBills] = useState<Bill[]>([]);

  const [date, setDate] = useState<Date | null>(null);

  const [note,setNote] = useState<string>('');

  const [amount, setAmount] = useState<number | null>(null);

  const [selectedAsset, setSelectedAsset] = useState<string>("");

  const [counter, setCounter] = useState(1)

  const theme = useTheme();

  const handleSubmitForm = (values: FormikValues, resetForm: Function) => {
    const {
      currency,
      amount,
      note,
    } = values;
    console.log(bills)
    if ((date && currency && amount && note && counter<5)) {
      onClick({
        date,
        currency,
        amount,
      });
      resetForm();
      setDate(null)
      setAmount(0)
      setNote('')
      setSelectedAsset('')
      setCounter(counter+1)
      console.log(amount, 'amountamount')
    }
  };

  const handleChangeNote = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 31) {
      setNote(inputValue);
    }
  };

  const handleChangeAmount = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = Number(event.target.value);
    if (inputValue == 0){
      setAmount(null)
    }else{setAmount(inputValue);}
  };

  const amountInputProps = {
    step: "any",
    value: amount,
    onChange: handleChangeAmount,
  };

  const noteInputProps = {
    step: "any",
    value: note,
    onChange: handleChangeNote,
  };

  const arrSelect = [
    {
      value: "Test1", label: "Test1",
    },
    {
      value: "Test2", label: "Test2",
    },
  ];
  
  const handleDeleteBill = (index: number) => {
    const saveBills = bills.filter(bill => bill.id !== index);
    setBills(saveBills)
  }

  useEffect(() => {
    if (amount && selectedAsset && date && note) {
      console.log("improve")
      if(bills[counter-1]){
          const updatedBills = bills.map(bill => {
            if (bill.id === counter) {
              return {
                date: date,
                currency: selectedAsset,
                amount: amount,
                note: note,
                id: counter,
              };
            }
            return bill;
          });
          setBills(updatedBills)
          console.log(bills)
      }else{
        setBills((prevBills)=>[...prevBills,{
          date: date,
          currency: selectedAsset,
          amount: amount,
          note: note,
          id: counter,
        }]);
        console.log(bills)
      }
    }
  }, [amount, selectedAsset, date, note]);

  const listStyle = {
    listStyle: 'none',
    margin: '0',
    padding: '0',
  };

  return (
    <>
      <ul style={listStyle}>
        {bills.slice(0, counter-1).map((bill, index) => (
          <li key={index}>
            <Formik
              initialValues={{
                amount: "",
                currency: "",
                note: "",
                date: "",
              }}
              onSubmit={()=>{}}
            >
              {({
                handleSubmit, setErrors,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Box sx={{
                    width: 395,
                    background: theme.palette.textColor.main,
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(2),
                    justifyContent: "space-between",
                    padding: theme.spacing(2),
                  }}
                  >
                    <Body2 sx={{
                      color: theme.palette.textColor.faded,
                    }}
                    >
                      Amount
                    </Body2>
        
                    <InputField
                      name="amount"
                      type="number"
                      inputProps={{value: bill.amount}}
                      placeholder="0:00"
                      startAdornment={(
                        <Body
                          sx={{
                            marginRight: "4px",
                          }}
                        >
                          $
                        </Body>
                      )}
                    />
                    <Box sx={{
                      display: "flex",
                      gap: theme.spacing(2),
                      width: "100%",
                    }}
                    >

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: theme.spacing(1),
                          width: "203px",
                        }}
                      >
                        <Body2 sx={{
                          color: theme.palette.textColor.faded,
                        }}
                        >
                          Currency
                        </Body2>
                        
                        <SelectField
                          name="currency"
                          items={[]}
                          label= {bill.currency}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: theme.spacing(1),
                          width: "203px",
                        }}
                      >
                        <Body2 sx={{
                          color: theme.palette.textColor.faded,
                        }}
                        >
                          Network
                        </Body2>
                        <ErrorMessage name="date" component="div" className="error" />
                        <DatePicker
                      date={bill.date} setDate={()=>{}} views={["day"]} />
                      </Box>
                    </Box>
                    <Body2 sx={{
                      color: theme.palette.textColor.faded,
                    }}
                    >
                      Note
                    </Body2>
                    <ErrorMessage name="note" component="div" className="error" />
                    <InputField
                      name="note"
                      type="string"
                      inputProps={{value: bill.note}}
                      placeholder="Note..."
                      defaultValue=""
                    />
                    <Body2 sx={{
                      color: theme.palette.textColor.faded,
                      textAlign: "right",
                    }}>  
                    {bill.note.length}/31
                    </Body2>
                    <ActionButton
                      onClick={() => handleDeleteBill(bill.id)}
                      label="Delete bill"
                    />
                  </Box>
                </Form>
              )}
            </Formik>
          </li>
        ))}
      </ul>

      <Formik
        initialValues={{
          amount: "",
          currency: "",
          note: "",
          date: "",
        }}
        validateOnChange={true}
        validate={(values) => {
          const errors: any = {};

          if (!values.amount) {
            errors.amount = "Amount is required";
          }
          if (!values.currency) {
            errors.currency = "Currency is required";
          }
          if (!values.note) {
            errors.note = "Note is required";
          }
          if(date === null){
            errors.date = "Date is required";
          }
          return errors;
        }}
        onSubmit={(values: FormikValues, actions) => {
          handleSubmitForm(values, actions.resetForm);
          actions.setSubmitting(false);
        }}
      >
        {({
          handleSubmit, setErrors,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box sx={{
              width: 395,
              background: theme.palette.textColor.main,
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: theme.spacing(2),
              justifyContent: "space-between",
              padding: theme.spacing(2),
            }}
            >
              <Body2 sx={{
                color: theme.palette.textColor.faded,
              }}
              >
                Amount
              </Body2>
              <ErrorMessage name="amount" component="div" className="error" />
              <InputField
                setErrors={setErrors}
                name="amount"
                type="number"
                inputProps={amountInputProps}
                placeholder="0:00"
                startAdornment={(
                  <Body
                    sx={{
                      marginRight: "4px",
                    }}
                  >
                    $
                  </Body>
                )}
              />
              <Box sx={{
                display: "flex",
                gap: theme.spacing(2),
                width: "100%",
              }}
              >

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(1),
                    width: "203px",
                  }}
                >
                  <Body2 sx={{
                    color: theme.palette.textColor.faded,
                  }}
                  >
                    Currency
                  </Body2>
                  <ErrorMessage name="currency" component="div" className="error" />
                  <SelectField
                    name="currency"
                    onClick={setSelectedAsset}
                    items={arrSelect}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(1),
                    width: "203px",

                  }}
                >
                  <Body2 sx={{
                    color: theme.palette.textColor.faded,
                  }}
                  >
                    Network
                  </Body2>
                  <ErrorMessage name="date" component="div" className="error" />
                  <DatePicker
                date={date} setDate={setDate} views={["day"]} />
                </Box>
              </Box>
              <Body2 sx={{
                color: theme.palette.textColor.faded,
              }}
              >
                Note
              </Body2>
              <ErrorMessage name="note" component="div" className="error" />
              <InputField
                setErrors={setErrors}
                name="note"
                type="string"
                inputProps={noteInputProps}
                placeholder="Note..."
                defaultValue=""
              />
              <Body2 sx={{
                color: theme.palette.textColor.faded,
                textAlign: "right",
              }}>  
              {note.length}/31
              </Body2>
              <ActionButton
                label="Transfer"
              />
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default TranferForm;
