import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_simao_list = createAsyncThunk(
  "simaos/api_v1_simao_list",
  async payload => {
    const response = await apiService.api_v1_simao_list(payload)
    return response.data
  }
)
export const api_v1_simao_create = createAsyncThunk(
  "simaos/api_v1_simao_create",
  async payload => {
    const response = await apiService.api_v1_simao_create(payload)
    return response.data
  }
)
export const api_v1_simao_retrieve = createAsyncThunk(
  "simaos/api_v1_simao_retrieve",
  async payload => {
    const response = await apiService.api_v1_simao_retrieve(payload)
    return response.data
  }
)
export const api_v1_simao_update = createAsyncThunk(
  "simaos/api_v1_simao_update",
  async payload => {
    const response = await apiService.api_v1_simao_update(payload)
    return response.data
  }
)
export const api_v1_simao_partial_update = createAsyncThunk(
  "simaos/api_v1_simao_partial_update",
  async payload => {
    const response = await apiService.api_v1_simao_partial_update(payload)
    return response.data
  }
)
export const api_v1_simao_destroy = createAsyncThunk(
  "simaos/api_v1_simao_destroy",
  async payload => {
    const response = await apiService.api_v1_simao_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const simaosSlice = createSlice({
  name: "simaos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_simao_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_simao_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_simao_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_simao_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_simao_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_simao_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_simao_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_simao_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_simao_list,
  api_v1_simao_create,
  api_v1_simao_retrieve,
  api_v1_simao_update,
  api_v1_simao_partial_update,
  api_v1_simao_destroy,
  slice: simaosSlice
}
