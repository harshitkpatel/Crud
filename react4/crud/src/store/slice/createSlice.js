import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
  name: "nameData",
  initialState: {
    formDataArray: [],
    formData: {
      fName: "",
      lName: "",
      sName: "",
      gender: "",
      city: "",
      hobby: [],
      birthday:"",
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
        if (val.uniqeKey === state.formData.uniqeKey) {
          val.fName = action.payload.fName;
          val.lName = action.payload.lName;
          val.sName = action.payload.sName;
          val.gender = action.payload.gender;
          val.city = action.payload.city;
          val.hobby = action.payload.hobby;
        }
      });
      state.isEdit = true;
    },
    getData: (state, action) => {
      state.formData = action.payload;
      state.isEdit = false;
    },
   
    deleteAllSelectedData: (state, action) => {
      if (action.payload.length > 0) {
        const selectedKeys = new Set(action.payload);
        state.formDataArray = state.formDataArray.filter(
          (v) => !selectedKeys.has(v.uniqeKey)
        );
      }
    },
  },
});

export const { addData, deleteData, getData, editData, deleteAllSelectedData } = submitSlice.actions;
export default submitSlice.reducer;
