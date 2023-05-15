package cli

import (
	"strconv"

	"electra/x/meter/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdListrecordings100() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "listrecordings-100 [device-id] [by-unix-time]",
		Short: "List the most recents 100 recordings from deviceID [when byUnixTime=true parameters are interpreted as unix DateTime timestams]",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqDeviceID := args[0]
			reqByUnixTime, err := cast.ToBoolE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientQueryContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryListrecordings100Request{

				DeviceID:   reqDeviceID,
				ByUnixTime: reqByUnixTime,
			}

			res, err := queryClient.Listrecordings100(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
