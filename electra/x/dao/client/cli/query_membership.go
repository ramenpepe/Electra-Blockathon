package cli

import (
	"context"

	"electra/x/dao/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListMembership() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-membership",
		Short: "list all membership",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMembershipRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MembershipAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowMembership() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-membership [memberaddress]",
		Short: "shows a membership",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argMemberaddress := args[0]

			params := &types.QueryGetMembershipRequest{
				Memberaddress: argMemberaddress,
			}

			res, err := queryClient.Membership(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
