import { createSlice } from "@reduxjs/toolkit";

export const submitSlice = createSlice({
  name: "nameData",
  initialState: {
    formDataArray: [],
    values: {
      first_name: "",
      last_name: "",
      gender: "",
      email: "",
      phone_number: "",
      city: "",
      state: "",
      hobby: [],
      uniqeKey: "",
    },
    isEdit: true,
  },

  reducers: {
    addData: (state, action) => {
      state.formDataArray.push({
        ...action.payload,
        uniqeKey: new Date().getTime(),
      });
    },
    deleteData: (state, action) => {
      state.formDataArray.splice(action.payload, 1);
    },
    editData: (state, action) => {
      state.formDataArray.map((val) => {
        
          val.first_name = action.payload.first_name;
          val.last_name = action.payload.last_name;
          val.email = action.payload.email;
          val.gender = action.payload.gender;
          val.phone_number = action.payload.phone_number;
          val.city = action.payload.city;
          val.state = action.payload.state;
          val.hobby = action.payload.hobby;
        
      });
      state.isEdit = true;
    },
    getData: (state, action) => {
      state.values = action.payload;
      state.isEdit = false;
    },
  },
});

export const { addData, deleteData, getData, editData } = submitSlice.actions;
export default submitSlice.reducer;
